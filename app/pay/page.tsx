import { NextPage } from "next";
import { Suspense } from "react";

import AdvancedFlow from "@/app/_components/advanced-flow";

const Pay: NextPage = () => {

  return (
    <main style={{ padding: '0.32rem' }}>
      <Suspense fallback={"loading"}>
        <AdvancedFlow />
      </Suspense>
    </main>
  );
}

export default Pay;
