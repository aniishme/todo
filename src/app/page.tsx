import InputBox from "@/components/InputBox";
import TodoContainer from "@/components/TodoContainer";

export default function Page() {
  return (
    <div className="bg-slate-200 flex justify-center h-screen py-4 px-2">
      <div className="w-[32rem] flex flex-col items-center justify-start gap-8">
        <InputBox />
        <TodoContainer />
      </div>
    </div>
  );
}
