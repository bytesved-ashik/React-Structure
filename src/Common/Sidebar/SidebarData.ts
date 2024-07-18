import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PhoneIcon from '@mui/icons-material/Phone';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

interface SubItem {
  icon: React.ComponentType;
  name: string;
}

interface SidebarSection {
  main: string;
  subItems: SubItem[];
}

interface SidebarDataProps {
  data: SidebarSection[];
}

export const SidebarData: SidebarDataProps = {
  data: [
    {
      main: 'Navigation',
      subItems: [
        {
          icon: SubscriptionsIcon,
          name: 'Organization Match'
        },
        {
          icon: SubscriptionsIcon,
          name: 'Subscription'
        }
      ]
    },
    {
      main: 'Other',
      subItems: [
        {
          icon: ContentPasteIcon,
          name: 'Terms of Service'
        },
        {
          icon: PrivacyTipIcon,
          name: 'Privacy Policy'
        }
      ]
    },
    {
      main: 'Get Help',
      subItems: [
        {
          icon: SubscriptionsIcon,
          name: 'FAQ'
        },
        {
          icon: PhoneIcon,
          name: 'Contact Us'
        }
      ]
    }
  ]
};
