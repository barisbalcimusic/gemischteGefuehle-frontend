import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatisticOneTabsContent from "./StatisticOneTabsContent";
import StatisticTwoTabsContent from "./StatisticTwoTabsContent";

import { useMetricsContext } from "@/utils/MetricsProvider";

export function MetricsPageTabs() {
  const {
    setMetricsOneStatus,
    setMetricsTwoStatus,
    metricsOneStatus,
    previousMetricsOneStep,
    getAllCheckins,
    showArrow,
    setShowArrow,
  } = useMetricsContext();

  return (
    <main>
      <Tabs defaultValue="account" className="max-w-[350px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="account"
            onClick={() => setMetricsTwoStatus(null)} // vielleicht nicht so gut?
          >
            Statistic One
          </TabsTrigger>
          <TabsTrigger
            value="password"
            onClick={() => setMetricsOneStatus(null)} // vielleicht nicht so gut?
          >
            Statistic Two
          </TabsTrigger>
        </TabsList>

        {/* statistic ONE */}
        <StatisticOneTabsContent />

        {/* statistic TWO */}
        <StatisticTwoTabsContent />
      </Tabs>
    </main>
  );
}
