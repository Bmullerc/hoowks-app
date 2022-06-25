export function Code(props) {
  return (
    <code className='break-words p-1 bg-orange-200 dark:text-zinc-700 rounded-sm'>{props.content}</code>
  )
}

export function HotTip(props) {
  return (
    <div className='bg-orange-300 p-2 mt-6 rounded-md border-l-4 2xl:w-2/3 border-orange-500'>
      <h6 className='text-orange-800 font-bold'>🔥 HOT TIP:</h6>
      {props.text}
    </div>
  )
}

export function PreCode(props) {
  return (
    <pre className='my-6 bg-zinc-300 rounded-md md:p-4 p-2 md:w-fit lg:text-base overflow-auto dark:bg-zinc-900 dark:text-zinc-300'>
        <code>
          {props.code}
        </code>
      </pre>
  )
}