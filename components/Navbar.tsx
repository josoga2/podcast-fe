import Link from 'next/link';
import qj_logo from './../public/qj.png'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="items-center min-h-full">
      {/** Desktop */}

      <main className="hidden md:flex mx-auto max-w-5xl p-5 flex-row ">
        <div className='flex  items-center gap-10 w-full '> 
            <div className='flex items-center gap-2'>
                <Image src={qj_logo} alt='qj_Logo' className='w-10 h-10' /> 
                <p className='font-bold'>Quantum Jollof</p> 
            </div>
            <div className='flex items-center gap-10'>
                <Link href={""}>Episodes</Link>
                <Link href={""} className='underline'>About</Link>
            </div>
        </div>
      </main>
      {/** Mobile */}


      <main className='md:hidden p-5'>
        <div className='flex items-center gap-2'>
          <Image src={qj_logo} alt='qj_Logo' className='w-10 h-10' /> 
          <p className='font-bold'>Quantum Jollof</p> 
        </div>
      </main>

    </div>
  );
}

export default Navbar;
