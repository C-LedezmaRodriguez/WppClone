import { useRouter } from 'expo-router';

const useAppNavigation = () => {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route as any);
  };

  const replaceTo = (route: string) => {
    router.replace(route as any);
  };

  return {
    navigateTo,
    replaceTo,
  };
};

export default useAppNavigation;