// src/components/SearchBar/SearchBar.tsx
import { useRef } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = (formData.get("query") as string)?.trim();

    if (!query) {
      toast.error("Please enter a search term");
      return;
    }

    onSubmit(query);
    formRef.current?.reset();
  }

  return (
    <header className={styles.searchbar}>
      <form ref={formRef} className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
