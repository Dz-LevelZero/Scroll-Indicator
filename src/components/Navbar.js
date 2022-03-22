import useReadingProgress from "../hooks/useReadingProgress";

const Navbar = () => {
  const completion = useReadingProgress();

  return (
    <nav className="bg-indigo-800 text-white py-6 sticky top-0">
      <div className="flex items-center justify-between container mx-auto text-xl">
        <a href="/">Sami T</a>
        <div className="flex gap-8">
          <ul><li>Home</li></ul>
          <ul><li>About</li></ul>
          <ul><li>Service</li></ul>
          <ul><li>Contact</li></ul>
        </div>
      </div>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-yellow-500 h-2 w-full bottom-0"
      />
    </nav>
  )
}

export default Navbar