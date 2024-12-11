'use client'

import TemplateLandscape from "@/app/components/TemplateLandscape";
import TemplatePortrate from "../components/TemplatePortrate";

export default function TemplatePage() {
  return (
    <div>
      <h1>Select a teemplate</h1>
      <div className="flex flex-row flex-wrap overflow-auto justify-center items-center bg-gray-500 ">
        <TemplateLandscape />
        <TemplatePortrate />
      </div>
    </div>
  );
}