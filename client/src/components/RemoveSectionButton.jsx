export function RemoveSectionButton({ section }) {
  return (
    <button
      className="absolute top-2 right-2 text-xs opacity-0 group-hover:opacity-100 transition bg-red-400 pl-2 pr-2 rounded-xl"
      onClick={() => console.log(`Removing ${section}`)}
    >
      Remove section x
    </button>
  );
}
