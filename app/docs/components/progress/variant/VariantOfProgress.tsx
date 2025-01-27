"use client";
import { Progress } from "~/src";

const VariantOfProgress = () => {
  return (
    <div className="flex flex-col gap-5 h-24 p-4 w-5/6">
      <Progress progress={45} color="info" rounded={false} />
      <Progress progress={45} color="info" rounded={true} />
      <Progress progress={45} color="info" bordered={true} />
    </div>
  );
};

const VariantOfProgressCode = `
"use client";
import { Progress } from "keep-react";

export const ProgressComponent = () => {
  return (
    <div className="flex flex-col gap-5">
      <Progress progress={45} color="info" rounded={false} />
      <Progress progress={45} color="info" rounded={true} />
      <Progress progress={45} color="info" bordered={true} />
    </div>
  );
}
`;

export { VariantOfProgress, VariantOfProgressCode };
