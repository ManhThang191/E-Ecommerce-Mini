import Sidebar from "@/components/sidebar/Sidebar";
import Card from "@/components/Card/Card";
export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Sidebar/>

      <div className="w-full flex justify-center mt-40">
        <div className="grid grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
