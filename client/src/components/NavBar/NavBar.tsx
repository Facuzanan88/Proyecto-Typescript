import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

import logo from "../../Assest/logo.jpg";

import { useState, useEffect } from "react";
import LogInButton from "../LoginButtons/LogInButton";
import LogOutButton from "../LoginButtons/LogOutButton";
import { useUserStore } from "../../store/userStore";

const NavBar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const userStore = useUserStore(); // Usando el hook directamente

  useEffect(() => {
    userStore.userByMail("facuzanana@gmail.com");
  });

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          mr={width > 300 ? { base: -20 } : { base: -5 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Link href="/">
          <Image
            src={logo}
            alt="Raes Logo"
            width={12}
            height={12}
            margin={{ base: "1", md: "2" }}
            padding={{ base: "-12" }}
          />
        </Link>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "center" }}>
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>

        <LogInButton />
        <LogOutButton />

        <ColorModeSwitcher />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav: React.FC = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const userStore = useUserStore(); // Usando el hook directamente
  const user = userStore.user;

  const NAV_ITEMS1: Array<NavItem> = [
    {
      label: "Productos",
      /* href: "/properties", */
      children: [
        {
          label: "Vaca",
          href: "/cow",
        },
        {
          label: "Cerdo",
          href: "/pig",
        },
        {
          label: "Embutidos",
          href: "/sausages",
        },
      ],
    },
    {
      label: "Formulario",
      href: "/registrarse",
    },
    {
      label: "Perfil",
      href: user ? `profile?email=${user.email}` : "nada",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
    {
      label: "Quienes Somos",
      href: "/quienessomos",
    },
    {
      label: "Sucursales",
      href: "/sucursales",
    },
  ];

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS1.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? ""}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav: React.FC<NavItem> = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav: React.FC = () => {
  const userStore = useUserStore(); // Usando el hook directamente
  const user = userStore.user;
  console.log(user, "USUARIO");

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Productos",
      /* href: "/properties", */
      children: [
        {
          label: "Vaca",
          href: "/cow",
        },
        {
          label: "Cerdo",
          href: "/pig",
        },
        {
          label: "Embutidos",
          href: "/sausages",
        },
      ],
    },
    {
      label: "Formulario",
      href: "/registrarse",
    },
    {
      label: "Perfil",
      href: user ? `profile=email=${user.email}` : "nada",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
    {
      label: "Quienes Somos",
      href: "/quienessomos",
    },
    {
      label: "Sucursales",
      href: "/sucursales",
    },
  ];

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem: React.FC<NavItem> = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  user?: Promise<Object>;
}

export default NavBar;
