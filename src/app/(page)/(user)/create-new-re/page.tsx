import { NewReForm } from "@/components";

export default function InputForm() {
  return (
    <div className="relative max-w-5xl w-full mx-auto my-3">
      <h1 className="md:text-4xl text-2xl font-bold my-3">
        Tạo tin đăng bán bất động sản
      </h1>
      <NewReForm urlReturn={"/user/my-re"}/>
    </div>
  );
}
