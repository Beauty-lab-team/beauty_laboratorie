export default function Button(props) {
   return (
      <button
         {...props}
         className={`${props.className} border border-accent-1 rounded-inner px-4 md:px-3 py-2 tracking-wide text-accent-1 hover:bg-accent-1 hover:text-white transition-all`}
      >
         {props.children}
      </button>
   )
}
