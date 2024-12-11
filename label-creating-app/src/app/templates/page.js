'use client'

import TemplateOne from "@/app/components/TemplateOne"

export default function TemplatePage() {
  return (
    <div className="flex flex-row flex-wrap overflow-auto justify-center items-center bg-gray-100 ">
      <TemplateOne />
      <TemplateOne />
      <TemplateOne />
      <TemplateOne />
      <TemplateOne />
      <TemplateOne />
      <TemplateOne />
    </div>

  );
}