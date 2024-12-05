import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import "./CollectionMenu.css";
import logo from "@/assets/image_transparent.png";

const CollectionMenu = () => {
  return (
    <Menubar>
      <MenubarMenu>
      <img className="menubar-img" src={logo} alt="Test" />
        <MenubarTrigger>Menu</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>My collections</MenubarItem>
          <MenubarItem>New collection</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About us</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default CollectionMenu;

