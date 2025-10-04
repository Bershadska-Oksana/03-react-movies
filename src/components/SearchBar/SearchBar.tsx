import { useRef, useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [query, setQuery] = useState("");

  return (
    <header className={styles.searchbar}>
      <form
        ref={formRef}
        className={styles.searchForm}
        action={(formData: FormData) => {
          const searchQuery = formData.get("query")?.toString().trim();

          if (!searchQuery) {
            toast.error("Please enter a search term");
            return;
          }

          onSubmit(searchQuery);
          formRef.current?.reset();
          setQuery("");
        }}
      >
        <input
          className={styles.input}
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
