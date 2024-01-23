
import { Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaBusinessTime, FaFile, FaFileImport, FaFileWord, FaIdeal, FaMendeley, FaPen, FaPersonBooth, FaTasks } from "react-icons/fa";
import { ReactElement,  } from "react";
import PersonalComponent from "../personal";
import WorkComponent from "../work";
import WriteComponent from "../write";
import { BusinessComponent, IdeasComponent, ImportantComponent, PlanComponent, TasksComponent } from "../..";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebase";




type Folder = {
  name: string;
  component: React.ReactNode;
};



interface ContentBoxProps {
  index: number;  
  icon: ReactElement;
  title: string;
  description: string;
  bgColor: string;
  component?: React.ReactNode;
}


const HomeComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [folders, ] = useState<Folder[]>([]);
  const [username, setUsername] = useState<string | null>(null); 
 
  

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };
 
 

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName || null);
      } else {
        setUsername(null);
      }
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

 
  
 
  

  const renderContent = () => {
    console.log(selectedTab)
   
    switch (selectedTab) {
      case 0:
        return (
          <>
            <Text fontWeight="700" mb={2} fontSize={['medium', 'large',]}>POPULAR CATEGORIES: </Text>
            <Box
              className=""
              mt={['0.05rem', '0.05rem', '0.05rem']}
              gap={['10px', '15px', '20px']}
              display='flex'
              justifyContent={['center', 'center', 'space-around']}
              flexWrap='wrap'
            >
              {contentData.map((content, index) => (
                <ContentBox key={index} {...content} index={index} />
              ))}
            </Box>
          </>
        );
      case 1:
        return (
          <>
            <Text fontWeight="700" mb={2} fontSize={['medium', 'large', 'x-large']}>Personal</Text>
            <PersonalComponent />
          </>
        );
      case 2:
        return (
          <>
            <Text fontWeight="700" mb={2} fontSize={['medium', 'large', 'x-large']}>Work</Text>
            <WorkComponent />
          </>
        );
      case 3:
        return (
          <>
            <Text fontWeight="700" mb={2} fontSize={['medium', 'large', 'x-large']}>Writing</Text>
            <WriteComponent />
          </>
        );

        case 4:
          return (
            <>
              <Text fontWeight="700" mb={2} fontSize={['medium', 'large', 'x-large']}>Business</Text>
              <BusinessComponent />
            </>
          );

          case 5:
            return (
              <>
                <Text fontWeight="700" mb={2} fontSize={['medium', 'large', 'x-large']}>Important</Text>
                <ImportantComponent />
              </>
            );

          case 6:
            return (
              <>
                <Text fontWeight="700" mb={2} fontSize={['medium', 'large', 'x-large']}>Plans</Text>
                <PlanComponent />
              </>
            );

            case 7:
              return (
                <>
                  <Text fontWeight="700" mb={2} fontSize={['medium', 'large', 'x-large']}>Tasks</Text>
                  <TasksComponent />
                </>
              );

              case 8:
                return (
                  <>
                    <Text fontWeight="700" mb={2} fontSize={['medium', 'large', 'x-large']}>Idea</Text>
                    <IdeasComponent />
                  </>
                );

                
      default:
        if (selectedTab >= folders.length + 9) {
          const folderIndex = selectedTab - folders.length - 9;
          if (folders[folderIndex]) {
            return folders[folderIndex].component;
          } else {
            return null;
          }
        }
        return null;
    }
  };
  
  
  

  const contentData = [
    {
      icon: <FaFile size={25} />,
      title: 'Plans',
      description: 'Write your dream article and blog',
      bgColor: '#a06cd5',
      component: <PlanComponent />
    },
    {
      icon: <FaPersonBooth size={25} />,
      title: 'Personal',
      description: 'Write your dream article and blog',
      bgColor: '#be99ff',
      component: <PersonalComponent />,
    },

    {
      icon: <FaFileWord size={25} />,
      title: 'Work',
      description: 'Write your dream article and blog',
      bgColor: '#916dd5',
      component: <WorkComponent />,
    },

    {
      icon: <FaPen size={25} />,
      title: 'Writing',
      description: 'Write your dream article and blog',
      bgColor: '#bfacfb',
      component: <WriteComponent />
    },


    {
      icon: <FaBusinessTime size={25} />,
      title: 'Business',
      description: 'Write your dream article and blog',
      bgColor: '#e0aaff',
      component: <BusinessComponent />
    },

    {
      icon: <FaFileImport size={25} />,
      title: 'Important',
      description: 'Write your dream article and blog',
      bgColor: '#d0bef2',
      component: <ImportantComponent />
    },

    {
      icon: <FaIdeal size={25} />,
      title: 'Plans',
      description: 'Write your dream article and blog',
      bgColor: '#f3c4fb',
      component: <PlanComponent />
    },

    {
      icon: <FaTasks size={25} />,
      title: 'Tasks',
      description: 'Write your dream article and blog',
      bgColor: '#b67be6',
      component: <TasksComponent />
    },

    {
      icon: <FaMendeley size={25} />,
      title: 'Ideas',
      description: 'Write your dream article and blog',
      bgColor: '#dec9e9',
      component: <IdeasComponent />
    },
  


  


  


  

  ];

  const ContentBox = ({ index, icon, title, description, bgColor,  }: ContentBoxProps) => (
    <Box
      display='flex'
      onClick={() => handleTabChange(index)}
      w={['20rem','45rem' , '30rem', '25rem']}
      alignItems={'center'}
      borderRadius={'10px'}
      gap='20px'
      py={'2rem'}
      px='1rem'
      className=""
      borderWidth='2px'
      shadow='md'
      bgColor={bgColor}
      color='black'
    >
      <Box display='flex' alignContent='center' justifyContent='center' bg='white' p='10px' borderRadius='50%' className="">
        {icon}
      </Box>
      <Box className="">
        <Text fontSize={['md', 'lg']} fontWeight={'bold'}>
          {title}
        </Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
  
  
  
  

  return (
    <Box>
      <Box className="" textAlign="center">
      <Text as="h1" fontWeight="bold" fontSize={["md", "lg", "x-large"]}>
          {username !== null ? <Text as="span" textTransform='capitalize' id="username">{username}</Text> : 'Loading...'}, So what exactly do you have in mind?
        </Text>
        <Text>Begin with selecting the content type from the options below</Text>
      </Box>

      <Tabs onChange={handleTabChange} mt={['30px', '40px', '50px']}>
      <Box  className="custom-scrollbar"
      style={{ overflowX: "auto", display: "flex" ,scrollbarWidth: "thin", scrollbarColor: "#fff #fff"}}>
        <TabList  borderBottom="none" gap={['10px', '15px', '20px']}
         justifyContent={['center', 'center', 'center', 'center']}
         textAlign='center' mx='auto'
        >
           <Tab bg='#f9f9f9f9' shadow='sm' borderRadius='10px' border="1px" borderColor="#f9f9f9f9" mb="2" pb="2" _selected={{ borderColor: "purple.200" }}>All</Tab>
          <Tab  bg='#f9f9f9f9' shadow='sm' borderRadius='10px' border="1px" borderColor="#f9f9f9f9" mb="2" pb="2" _selected={{ borderColor: "purple.200" }}>Personal</Tab>
          <Tab  bg='#f9f9f9f9' shadow='sm' borderRadius='10px' border="1px" borderColor="#f9f9f9f9" mb="2" pb="2" _selected={{ borderColor: "purple.200" }}>Work</Tab>
          <Tab  bg='#f9f9f9f9' shadow='sm' borderRadius='10px' border="1px" borderColor="#f9f9f9f9" mb="2" pb="2" _selected={{ borderColor: "purple.200" }}>Writing</Tab>
          <Tab  bg='#f9f9f9f9' shadow='sm' borderRadius='10px' border="1px" borderColor="#f9f9f9f9" mb="2" pb="2" _selected={{ borderColor: "purple.200" }}>Business</Tab>
          <Tab  bg='#f9f9f9f9' shadow='sm' borderRadius='10px' border="1px" borderColor="#f9f9f9f9" mb="2" pb="2" _selected={{ borderColor: "purple.200" }}>Important</Tab>
          <Tab  bg='#f9f9f9f9' shadow='sm' borderRadius='10px' border="1px" borderColor="#f9f9f9f9" mb="2" pb="2" _selected={{ borderColor: "purple.200" }}>Plans</Tab>
          <Tab  bg='#f9f9f9f9' shadow='sm' borderRadius='10px' border="1px" borderColor="#f9f9f9f9" mb="2" pb="2" _selected={{ borderColor: "purple.200" }}>Tasks</Tab>
          <Tab  bg='#f9f9f9f9' shadow='sm' borderRadius='10px' border="1px" borderColor="#f9f9f9f9" mb="2" pb="2" _selected={{ borderColor: "purple.200" }}>Ideas</Tab>
  
        </TabList>
        </Box>

        <TabPanels>
        
          <TabPanel>{renderContent()}</TabPanel>
          <TabPanel>{renderContent()}</TabPanel>
          <TabPanel>{renderContent()}</TabPanel>
          <TabPanel>{renderContent()}</TabPanel>
          <TabPanel>{renderContent()}</TabPanel>
          <TabPanel>{renderContent()}</TabPanel>
          <TabPanel>{renderContent()}</TabPanel>
          <TabPanel>{renderContent()}</TabPanel>
          <TabPanel>{renderContent()}</TabPanel>
      
        </TabPanels>
      </Tabs>



 

    </Box>
  );
};

export default HomeComponent;



