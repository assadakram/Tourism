import Content from "../components/content";
import { getData } from "./page";

export default async function Home() {
  let advantures = [];
  let loading = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        advantures = data;
      } catch (error) {
        setError("Failed to fetch data from Sanity.");
      } finally {
        loading = false;
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Content locations={advantures} loading={loading} />
    </div>
  );
}
