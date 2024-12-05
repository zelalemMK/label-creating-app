
import "@/app/components/TemplateOne"

function AnotherTempalte() {
    return (
        <>Hell</>
    )
}


function TemplateOne() {
  return <div className="w-[400px] h-[400px] bg-white">From template one</div>;
}


export default function TemplatePage() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 ">
        Page
      <AnotherTempalte />
      <TemplateOne />
    </div>
  );
}