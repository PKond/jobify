import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const HomePage = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <Button>Default Button</Button>
      <Button variant="outline" size='icon'>
        <Camera />
      </Button>
    </div>
  );
};
export default HomePage;
