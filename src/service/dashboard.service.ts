import { DashboardItem, DashboardType } from "../types/dashboard.types"

export const getDashboards = async (): Promise<DashboardType[]> =>
  await [
    {
      id: DashboardItem.DASHBOARD,
      title: "Dashboard",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id mi at neque posuere mollis. Aenean imperdiet, elit eu pellentesque euismod, sapien eros dictum tellus, posuere dictum ante diam et enim. Mauris semper lectus arcu, quis feugiat elit porta id. Nam vel nibh non nisi laoreet consequat eu non tellus. Nunc ut sapien a risus lobortis commodo vitae sed tellus. Phasellus ultricies dolor ac tempus feugiat. Fusce euismod massa in libero dapibus porta.",
    },
    {
      id: DashboardItem.SPORTS,
      title: "Sports",
      text: "Sed ultricies ullamcorper lectus, at consequat massa ullamcorper id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis fringilla nulla efficitur, molestie ex id, commodo lorem. Nulla elementum nisl ac molestie scelerisque. Phasellus in lobortis nunc. Cras sollicitudin ultrices felis id tempor. In hac habitasse platea dictumst. Nam dictum nulla eget libero pharetra, non sodales metus eleifend. Ut fermentum felis eget mi mattis pharetra. In mi neque, mattis nec velit at, rutrum egestas velit. Sed at risus egestas, faucibus sapien vel, ornare enim. Fusce at metus porttitor, semper leo feugiat, interdum ex.",
    },
    {
      id: DashboardItem.COMPETITIONS,
      title: "Competitions",
      text: "Vestibulum at rhoncus risus. Quisque consequat lorem vel dolor consectetur malesuada. Suspendisse venenatis metus tellus, eu consectetur leo sodales vel. Phasellus tempus, mi in consequat pharetra, risus leo egestas eros, eu mattis lorem metus non lorem. Sed libero orci, aliquet quis ullamcorper in, sagittis in tortor. Aenean at eleifend neque. Aliquam erat volutpat. Curabitur congue mi sit amet enim ornare lobortis. Phasellus vulputate nulla eget nunc convallis imperdiet.",
    },
    {
      id: DashboardItem.SCHEDULING,
      title: "Scheduling",
      text: "Pellentesque dignissim pharetra leo in sollicitudin. Fusce odio sem, suscipit in tempor quis, tempor ut lectus. Duis at massa eu dui viverra elementum. Vestibulum vel orci sapien. Donec vitae neque rhoncus, consequat orci id, luctus odio. Cras pellentesque leo non nunc convallis auctor quis in lectus. Aenean id lobortis eros. Duis pharetra vulputate faucibus. Nullam nec eros a lectus pellentesque blandit sit amet eu lectus. Sed a nisl a tellus ornare fringilla sed quis enim. Integer velit neque, interdum vitae tellus ut, consectetur pulvinar nibh. Maecenas finibus dolor justo, nec ultrices massa sollicitudin in.",
    },
    {
      id: DashboardItem.ORGANISATIONS,
      title: "Organisations",
      text: "Quisque ac lacus laoreet urna ultricies dictum ut id lectus. Vivamus vitae maximus elit, ut tempus quam. Vestibulum laoreet felis lacus, feugiat pellentesque arcu sodales in. Proin ultricies vulputate risus, quis ullamcorper orci molestie id. Proin a turpis nibh. Pellentesque malesuada augue consequat neque rhoncus, eget laoreet justo sodales. Cras non dui dui.",
    },
    {
      id: DashboardItem.USERS,
      title: "Users",
      text: "Suspendisse tincidunt convallis pellentesque. Praesent pharetra viverra euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut lobortis vulputate vestibulum. Phasellus nec orci scelerisque, malesuada mi vel, porta dui. Donec interdum augue a magna dignissim mollis non quis libero. In hac habitasse platea dictumst. Etiam eget libero aliquet, ornare nibh sed, dignissim arcu. Nulla condimentum feugiat libero sed posuere. Vivamus lobortis, nulla sit amet lacinia tristique, nisi elit malesuada felis, eu congue tortor tortor sed augue. Sed consequat dui eu aliquet efficitur. Nunc sodales ante non ante ullamcorper interdum. Sed orci ligula, iaculis et lorem eu, facilisis efficitur enim.",
    },
  ]
