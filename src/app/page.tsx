import InputBox from "@/components/InputBox";
import TodoContainer from "@/components/TodoContainer";

export default function Page() {
  return (
    <div className="bg-slate-200 flex    gap-4 justify-center items-start  min-h-screen py-4 px-2">
      <div className="w-[32rem] flex flex-col items-center justify-start gap-8">
        <h1 className="text-3xl w-full text-center text-purple-500 font-bold">
          Todo Things
        </h1>
        <InputBox />
        <TodoContainer />
      </div>
    </div>
  );
}
