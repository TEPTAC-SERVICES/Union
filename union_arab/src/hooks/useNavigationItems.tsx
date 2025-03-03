import { Calendar, DollarSignIcon, FileText, Landmark, Users } from "lucide-react";
import { useTranslations } from "next-intl";
 
export const useNavigationItems = () => {
   const t = useTranslations('Navbar');
 
  return [
    {
      key: 'organization',
      label: t("organization.title"),
      icon: <Landmark className="mr-2 h-4 w-4" />,
      items: [
        { label: t('organization.structure'), href: '/organization/about' },
        { label: t('organization.presidency'), href: '/organization/history' },
        { label: t('organization.secretariat'), href: '/organization/leadership' },
        { label: t('organization.board_of_directors'), href: '/organization/partners' },
      ]
    },
    {
      key: 'membership',
      label: t("membership.title"),
      icon: <Users className="mr-2 h-4 w-4" />,
      items: [
        { label: t("membership.benefits"), href: '/membership/benefits' },
        { label: t("membership.join"), href: '/membership/join' },
        { label: t("membership.members_directory"), href: '/membership/directory' },
      ]
    },
    {
      key: 'activities',
      label:t("activities.title"),
      icon: <Calendar className="mr-2 h-4 w-4" />,
      items: [
        { label: t("activities.upcoming_events"), href: '/activities/events' },
        { label: t("activities.conferences"), href: '/activities/conferences' },
        { label: t("activities.past_events"), href: '/activities/past-events' },
      ]
    },
    {
      key: 'financing',
      label:t("financing.title"),
      icon: <DollarSignIcon className="mr-2 h-4 w-4" />,
      items: [
        { label: t("financing.info"), href: '/financing/info' },
        { label: t("financing.beneficiaries"), href: '/financing/beneficiaries' },
        { label: t("financing.statistics"), href: '/financing/statistics' },
      ]
    },
    {
      key: 'documents',
      label: t("documents.title"),
      icon: <FileText className="mr-2 h-4 w-4" />,
      items: [
        { label: t("documents.union_docs"), href: '/documents/union-docs' },
        { label: t("documents.annual_report"), href: '/documents/annual_report' },
        { label: t("documents.basic_law"), href: '/documents/basic_law' },
      ]
    },
  ];
};
