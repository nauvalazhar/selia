import { Button } from 'components/selia/button';
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from 'components/selia/drawer';
import {
  Field,
  FieldDescription,
  FieldItem,
  FieldLabel,
} from 'components/selia/field';
import { Fieldset, FieldsetLegend } from 'components/selia/fieldset';
import { Input } from 'components/selia/input';
import { Checkbox, CheckboxGroup } from 'components/selia/checkbox';
import { Radio, RadioGroup } from 'components/selia/radio';
import { Separator } from 'components/selia/separator';
import { Text } from 'components/selia/text';

export default function DrawerSettingsExample() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button>Open Settings</Button>} />
      <DrawerPopup>
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Fieldset>
            <FieldsetLegend>Profile</FieldsetLegend>
            <Text>Update your personal information.</Text>
            <Field>
              <FieldLabel htmlFor="settings-name">Display Name</FieldLabel>
              <Input
                id="settings-name"
                defaultValue="Jane Doe"
                placeholder="Enter your name"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="settings-email">Email</FieldLabel>
              <Input
                id="settings-email"
                type="email"
                defaultValue="jane@example.com"
                placeholder="Enter your email"
              />
              <FieldDescription>
                We'll use this for account recovery.
              </FieldDescription>
            </Field>
          </Fieldset>

          <Separator className="my-4" />

          <Field>
            <Fieldset render={<CheckboxGroup defaultValue={['email', 'push']} />}>
              <FieldsetLegend>Notifications</FieldsetLegend>
              <Text>Choose how you want to be notified.</Text>
              <FieldItem>
                <Checkbox name="notifications" id="s-notif-email" value="email" />
                <FieldLabel htmlFor="s-notif-email">Email notifications</FieldLabel>
              </FieldItem>
              <FieldItem>
                <Checkbox name="notifications" id="s-notif-sms" value="sms" />
                <FieldLabel htmlFor="s-notif-sms">SMS notifications</FieldLabel>
              </FieldItem>
              <FieldItem>
                <Checkbox name="notifications" id="s-notif-push" value="push" />
                <FieldLabel htmlFor="s-notif-push">Push notifications</FieldLabel>
              </FieldItem>
            </Fieldset>
          </Field>

          <Separator className="my-4" />

          <Field>
            <Fieldset render={<RadioGroup defaultValue="system" />}>
              <FieldsetLegend>Appearance</FieldsetLegend>
              <Text>Select your preferred theme.</Text>
              <FieldItem>
                <Radio id="s-theme-light" value="light" />
                <FieldLabel htmlFor="s-theme-light">Light</FieldLabel>
              </FieldItem>
              <FieldItem>
                <Radio id="s-theme-dark" value="dark" />
                <FieldLabel htmlFor="s-theme-dark">Dark</FieldLabel>
              </FieldItem>
              <FieldItem>
                <Radio id="s-theme-system" value="system" />
                <FieldLabel htmlFor="s-theme-system">System</FieldLabel>
                <FieldDescription>
                  Follows your operating system preference.
                </FieldDescription>
              </FieldItem>
            </Fieldset>
          </Field>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose>Cancel</DrawerClose>
          <DrawerClose render={<Button>Save Changes</Button>} />
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}
