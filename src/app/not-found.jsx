import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <main className=" text-[#f2f2f2] h-screen space-y-10 w-full flex-col center text-center">
      <h1 className="leading-none">404 <br />Page Not Found</h1>
      <Link href={"/"}>
        <button className='uppercase text-sm bg-[#0f1219] text-[#f2f2f2] w-fit p-3 leading-none'>Back to Home</button>
      </Link>
    </main >
  );
}
