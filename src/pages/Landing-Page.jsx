import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PenLine, BookOpen, Heart, Feather } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/auth");
  }

  return (
    <div className="min-h-screen bg-background font-hindi">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455885661740-29cbf08a42fa?q=80&w=2000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>
        
        <div className="relative container mx-auto px-4 py-32">
        <div className="absolute top-4 right-4">
            <ModeToggle />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-slate-50 mb-6">
              काव्यपथ
            </h1>
            <p className="text-2xl text-slate-200 mb-8">
              अपनी कविताओं को लिखें, पढ़ें और साझा करें। हिंदी साहित्य की एक नई यात्रा।
            </p>
            <div className="flex gap-4">
              <Button onClick={handleButtonClick} size="lg" className="bg-primary hover:bg-blue-900 cursor-pointer">
                लेखन शुरू करें
                <PenLine className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-slate-800/40 hover:bg-slate-200 text-white border-slate-600 cursor-pointer">
                और जानें
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24 bg-background mb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
            <PenLine className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">लिखें</h3>
            <p className="text-card-foreground">
              अपनी भावनाओं को शब्दों में पिरोएं। हमारा एडिटर आपकी रचनात्मकता को नई ऊंचाइयों तक ले जाएगा।
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">पढ़ें</h3>
            <p className="text-card-foreground">
              हज़ारों कवियों की रचनाओं का आनंद लें। नई विचारधाराओं और कहानियों की खोज करें।
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
            <Heart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">साझा करें</h3>
            <p className="text-card-foreground">
              अपनी कविताओं को दुनिया के साथ साझा करें। प्रतिक्रियाएं प्राप्त करें और समुदाय से जुड़ें।
            </p>
          </Card>
        </div>
      </div>

      {/* Featured Poem Section */}
      <div className="bg-background2 py-0 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Feather className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-semibold mb-8 bg-foreground2">आज की विशेष रचना</h2>
            <Card className="p-8 text-left bg-card">
              <p className="text-lg mb-4 leading-relaxed text-card-foreground">
                "जीवन की राहों पर चलते हुए,<br />
                कभी थक कर रुक जाते हैं।<br />
                फिर नई उमंग से भर कर,<br />
                नए सपने बुन जाते हैं।"
              </p>
              <p className="text-right text-card-foreground">- रमेश कुमार</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-bakground">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-slate-600">© 2025 काव्यधारा। सर्वाधिकार सुरक्षित।</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-600 hover:text-slate-900">नियम और शर्तें</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">गोपनीयता नीति</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">संपर्क करें</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;