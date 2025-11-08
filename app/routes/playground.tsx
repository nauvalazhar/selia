import { Tabs, TabsPanel, TabsList, TabsTab } from 'components/selia/tabs';
import { HomeIcon, SettingsIcon, UserIcon } from 'lucide-react';

export default function Playground() {
  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <div className="w-4/12">
        <Tabs>
          <TabsList>
            <TabsTab value="home">
              <HomeIcon />
              Home
            </TabsTab>
            <TabsTab value="settings">
              <SettingsIcon />
              Settings
            </TabsTab>
            <TabsTab value="profile">
              <UserIcon />
              Profile
            </TabsTab>
          </TabsList>
          <TabsPanel value="home">Home</TabsPanel>
          <TabsPanel value="settings">Settings</TabsPanel>
          <TabsPanel value="profile">Profile</TabsPanel>
        </Tabs>
      </div>
    </div>
  );
}
