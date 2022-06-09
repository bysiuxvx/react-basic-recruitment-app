import { useEffect, useState } from "react"
import { navigationRoutes } from "../navigationRoutes"
import { DashboardItem, DashboardType } from "../types/dashboard.types"
import { NoResults } from "../components/NoResults/NoResults"
import { getDashboards } from "../service/dashboard.service"

import DashboarBody from "./DashboardBody"

export const DashboardScreen = () => {
  const [items, setItems] = useState<DashboardType[]>([])

  const getLinkTo = (id: DashboardItem) => {
    switch (id) {
      case DashboardItem.DASHBOARD:
        return navigationRoutes.dashboard.path
      case DashboardItem.SPORTS:
        return navigationRoutes.sports.path
      case DashboardItem.COMPETITIONS:
      case DashboardItem.ORGANISATIONS:
      case DashboardItem.USERS:
      case DashboardItem.SCHEDULING:
        return navigationRoutes.dashboard.path
    }
  }

  const fetchDashboardData = async () => await getDashboards()

  useEffect(() => {
    fetchDashboardData()
      .then((data) => setItems(data))
      .catch((error) => console.log(error))
  }, [])

  if (!items || items.length === 0) {
    return <NoResults />
  }

  return <DashboarBody items={items} getLink={getLinkTo} />
}
