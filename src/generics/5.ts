//У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. 
// Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}
type Description = Record<UserRole, string>;
// Замініть наступний код на версію за допомогою Record- дозволяє створювати типи із зазделегіть відомими властивостями
const RoleDescription: Description  = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
