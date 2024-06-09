import { navEl } from "@/data/data";

export const Nav = () => {
  return (
    <header className="bg-white shadow-sm w-full header m-auto px-16">
      <nav className="flex flex-col sm:flex-row justify-between items-center relative">
        <img src="images/cv1.png" alt="logo" className="w-[20%] sm:w-20" />
        <ul className="flex !list-none m-auto sm:m-0 main-nav">
          {navEl.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.element}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
