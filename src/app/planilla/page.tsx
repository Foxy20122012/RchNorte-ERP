'use client'

import useHasMounted from "@/hooks/useHasMounted";
import Loading from "@/components/Loading";

const PlanillaHome = () => {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return <Loading />; //<Loadig />
  }
  return (
    <div className="texl-xl font-bold mt-20 uppercase block">Hello World</div>
  );
};

export default PlanillaHome;
