import { prisma } from '../../db'

async function getData () {
  return prisma.section.findMany({
    select: {
      crs_id: true,
      days_of_week: true,
      time_of_day: true,
      location: true,
      credit_hours: true,
      status: true,
      Course: {
        select: {
          CourseName: true,
          Topic: true
        }
      },
      Instructor: {
        select: {
          Person: {
            select: {
              FirstName: true,
              LastName: true
            }
          }
        }
      }
    }
  });
}

export const dynamic = 'force-dynamic'

export default async function Home () {
  const sections: any = await getData()

  return (
    <div className=''>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead className='bg-red-800 text-white'>
            <tr>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>CRS #</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Course</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Topic</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Days Time</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Location</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Instructor</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Credits</th>
              <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Status</th>
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {sections.map((section: any, index: number) => (
              <tr key={index}>
                <td className='text-left py-3 px-4'>{section.crs_id}</td>
                <td className='text-left py-3 px-4'>{section.Course.CourseName}</td>
                <td className='text-left py-3 px-4'>{section.Course.Topic}</td>
                <td className='text-left py-3 px-4'>{`${section.days_of_week}`}</td>
                <td className='text-left py-3 px-4'>{section.location}</td>
                <td className='text-left py-3 px-4'>{`${section.Instructor.Person.FirstName} ${section.Instructor.Person.LastName}`}</td>
                <td className='text-left py-3 px-4'>{section.credit_hours}</td>
                <td className='text-left py-3 px-4'>{section.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mt-4'>
        <div className='p-5 bg-gray-100 rounded-lg shadow-xs'>
          <div className='text-xs uppercase font-bold text-gray-600' />
          <div className='mt-3'>
            {/* <p className="text-gray-600 text-sm"> */}
            {/*  This class addresses Python programming. Email questions to instructor, Ghansham Manwani */}
            {/*  (gmanwani@iu.edu). This course is designed for non-Computer Science majors. */}
            {/*  /!* ...rest of the text *!/ */}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>

  )
}
