import wallpaper from '../../public/WallPaper.png'
import Image from 'next/image';
import Youtube from '../../public/YOUTUBE.png'
import Spotify from '../../public/SPOTIFY.png'
import Apple from '../../public/aPPLE.png'
import Link from 'next/link';
import play from '../../public/play_circle.png'

const podcasts = await fetch('https://qj-podcast.up.railway.app/api/podcasts/')
const posts = await podcasts.json()
//console.log(posts)


export default function Home() {
  return (
    <div className="items-center min-h-full">

      {/** Desktop */}
      <main className='hidden md:flex mx-auto max-w-5xl p-5  flex-row  justify-between'>
        <div className='max-w-1/4'>
          <Image src={wallpaper} alt='wallpaper' className='w-64 pb-5 h-64'/>
          <p className='text-xs leading-4 text-justify'>Quantum reflects the deep exploration of scientific concepts, while Jollof symbolizes the vibrant, engaging, and a unique African flavor of the discussions. We present this podcast as a fun, approachable platform for science communication, rooted in African identity.</p>
          <p className='pt-5 font-bold text-xs'> ▷ {posts.length} Episodes</p>
        </div>
        <div className='min-w-1/2 px-7'>
          <p className='font-bold'>Quantum Jollof</p>
          <p className='pt-5 font-bold text-xs'> ▷ {posts.length} Episodes</p>
          {posts.map((pod:any) => (
            <div key={pod.id} >
              <Link href={pod.youtube_link} className='flex flex-row gap-5 text-sm py-5'>
                <div className='w-10'> <Image src={play} alt='player' /> </div>
                <div className='max-w-2/3'> <p className='font-bold'> {pod.title} </p> <p>{pod.summary}</p> <div className='flex gap-5 items-center pt-2 text-zinc-600 text-xs'>  <p className=''> {pod.length} </p> <p> {pod.created_at} </p> </div> </div>
                <div> <Image src={pod.guest_image} alt='autor new name' width={200} height={150}/>  </div>
              </Link>
              <hr className='border-t border-gray-300' />
            </div>
          ))}
          
        </div>
        <div className='text-sm flex flex-col items-start max-w-1/4'>
          <p className='font-bold'>Follow us on: </p>
          <div className='flex flex-row items-center gap-5 py-2'> <Image src={Youtube} alt='Youtube' className='w-7 h-7' /> <Link href={''}>YouTube</Link> </div>
          <div className='flex flex-row items-center gap-5 py-2'> <Image src={Spotify} alt='Spotify' className='w-7 h-7' /> <Link href={''}>Spotify</Link> </div>
          <div className='flex flex-row items-center gap-5 py-2'> <Image src={Apple} alt='Apple' className='w-7 h-7' /> <Link href={''}>Apple</Link> </div>
        </div>
      </main>

      {/**Mobile */}
      <main className='md:hidden p-5'>
          <div className='flex items-center flex-col gap-5 px-5'>
            <Image src={wallpaper} alt='wallpaper' className='w-64 h-64' />
            <p className='text-2xl'>Quantum Jollof</p>
            <p className='text-sm leading-5 text-center'>Quantum reflects the deep exploration of scientific concepts, while Jollof symbolizes the vibrant, engaging, and a unique African flavor of the discussions. We present this podcast as a fun, approachable platform for science communication, rooted in African identity.</p>
            <p className='font-bold '> ▷ {posts.length} Episodes</p>
          </div>

          <div>
            {posts.map((pod:any) => (
              <div key={pod.id} >
                <Link href={pod.youtube_link} className='flex flex-row gap-5 text-sm py-5'>
                  <div className='w-10'> <Image src={play} alt='player' /> </div>
                  <div className='max-w-2/3'> <p className='font-bold'> {pod.title} </p> <p>{pod.summary}</p> </div>
                </Link>
                <hr className='border-t border-gray-300' />
              </div>
            ))}
          </div>
      </main>
      
    </div>
  );
}
