import { Wrapper } from "./wrapper";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Recommended, RecommendedSkeleton } from "./recommended";

import { getRecommended } from "@/lib/reccomended-service";
import { getFollowedUsers } from "@/lib/follow-service";
import { Following, FollowingSkeleton } from "./following";

export const Sidebar = async () => {
    const recommended = await getRecommended();
    const following = await getFollowedUsers();
    // Fetch Followed Users

    // Fetch Recommeneded Users

    return (
        <Wrapper>
          <Toggle />
          <div className="space-y-4 pt-4 lg:pt-0">
            <Following data={following} />
            <Recommended data={recommended} />
          </div>
        </Wrapper>
      );
    };

export const SideBarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z=50">
            <ToggleSkeleton />
            <FollowingSkeleton />
            <RecommendedSkeleton />
            
        </aside>
   );
};
