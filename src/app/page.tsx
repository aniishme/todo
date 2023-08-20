import InputBox from "@/components/InputBox";
import TodoContainer from "@/components/TodoContainer";

export default function Page() {
  return (
    <div className="bg-slate-200 flex flex-col gap-4 justify-start items-center  min-h-screen py-4 px-2">
      <h1 className="text-3xl text-purple-500 font-bold">Todo Things</h1>
      <div className="w-[32rem] flex flex-col items-center justify-start gap-8">
        <InputBox />
        <TodoContainer />
      </div>
    </div>
  );
}
