export function Settings() {
  return (
    <div className='inset-0 h-full w-full bg-white p-20'>
      <div className='container m-auto'>
        <h2 className='text-3xl'>Settings</h2>

        <div className='mt-10'>
          <button className='flex w-full items-center gap-2 border p-4'>
            <span className='icon-[mdi--palette] text-xl' />
            <div className='flex-1 text-left'>Apparence</div>
            <span className='icon-[mdi--chevron-right]' />
          </button>

          <button className='flex w-full items-center gap-2 border border-t-0 p-4'>
            <span className='icon-[mdi--controller] text-xl' />
            <div className='flex-1 text-left'>Input</div>
            <span className='icon-[mdi--chevron-right]' />
          </button>

          <button className='flex w-full items-center gap-2 border border-t-0 p-4'>
            <span className='icon-[mdi--monitor-shimmer] text-xl' />
            <div className='flex-1 text-left'>Emulation</div>
            <span className='icon-[mdi--chevron-right]' />
          </button>

          <button className='flex w-full items-center gap-2 border border-t-0 p-4'>
            <span className='icon-[mdi--about] text-xl' />
            <div className='flex-1 text-left'>About</div>
            <span className='icon-[mdi--chevron-right]' />
          </button>
        </div>
      </div>
    </div>
  )
}
