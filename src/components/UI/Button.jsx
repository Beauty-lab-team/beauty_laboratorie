export default function Button(props) {
   return (
      <button
         {...props}
         className={`${props.className} text-accent-1 px-4 md:px-3 py-2 border border-accent-1 rounded-inner tracking-wide hover:bg-accent-1 active:bg-accent-1 hover:text-white active:text-white transition-colors`}
      >
         {props.children}
      </button>
   )
}
