// This middleware is to check where the user is trying to route to. the idea is to set a requirement of sorts that
// determines if a user is able or allowed to go to that path. ie. you need to be logged in to view this page or you need to pay for the access to this page
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  if (user.value || to.params.chapterSlug === '1-chapter-1') {
    return;
  }
  return navigateTo(`/login?redirectTo=${to.path}`);
});
