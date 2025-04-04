import React from 'react';
import { useForm } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import poems from '../database/poems';

const categories = [
  'प्रेम कविता',
  'दोहे',
  'ग़ज़ल',
  'हाइकु',
  'मुक्तक',
  'अन्य'
];

function AddPoemPage() {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      title: '',
      content: '',
      category: '',
      image: null
    }
  });

  const userData = useSelector((state) => state.auth.userData);

  const onSubmit = (data) => {
    console.log(data);

    poems.push({
      id: Number(Math.random()*100),
      title: data.title,
      excerpt: data.content,
      imageUrl: "https://images.unsplash.com/photo-1518050947974-4be8c7469f0c?auto=format&fit=crop&q=80&w=800",
      author:{
        author: userData.image,
        avatar: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?auto=format&fit=crop&q=80&w=100",
      },
      likes: 128,
        comments: [
            {
                id: Number(Math.random()*100),
                content: "This poem is so beautiful!",
            },
            {
                id: Number(Math.random()*100),
                content: "This poem is so awesome!",
            }
        ],
    })
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('image', file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with Theme Toggle */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            काव्यपथ
          </h1>
          <ModeToggle />
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
              नई कविता जोड़ें
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              अपनी कविता को साझा करें और दूसरों तक पहुंचाएं
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Title Input */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-700 dark:text-gray-200">
                  शीर्षक
                </Label>
                <Input
                  id="title"
                  {...register('title')}
                  className="w-full"
                  placeholder="कविता का शीर्षक लिखें"
                />
              </div>

              {/* Category Dropdown */}
              <div className="space-y-2">
                <Label className="text-gray-700 dark:text-gray-200">
                  श्रेणी
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {watch('category') || 'श्रेणी चुनें'}
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {categories.map((category) => (
                      <DropdownMenuItem
                        key={category}
                        onClick={() => setValue('category', category)}
                      >
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* TinyMCE Editor */}
              <div className="space-y-2">
                <Label className="text-gray-700 dark:text-gray-200">
                  कविता
                </Label>
                <Editor
                  apiKey="2v166tqpbty99gtglvyvr6swoogj55ctnzj5mu2upn3j7ldu"
                  init={{
                    height: 400,
                    menubar: false,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style: 'body { font-family: "Noto Sans Devanagari", sans-serif; font-size: 16px; }'
                  }}
                  onEditorChange={(content) => setValue('content', content)}
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label className="text-gray-700 dark:text-gray-200">
                  छवि
                </Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full"
                />
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              कविता प्रकाशित करें
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default AddPoemPage; 