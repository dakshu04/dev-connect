"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  MessageCircle,
  Share,
  Home,
  Search,
  Bell,
  Mail,
  User,
  LogOut,
  TrendingUp,
  Clock,
  Bookmark,
} from "lucide-react"

interface Post {
  id: number
  author: string
  username: string
  avatar: string
  content: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  liked: boolean
}

interface NewsItem {
  id: number
  title: string
  source: string
  time: string
  engagement: string
}

export default function SocialDashboard() {
  const [newPost, setNewPost] = useState("")
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Sarah Chen",
      username: "@sarahchen",
      avatar: "/professional-woman-diverse.png",
      content:
        "Just deployed a new React app with Next.js 14! The app router is incredible for building modern web applications. The developer experience keeps getting better. 🚀\n\n```tsx\nconst app = () => <div>Hello World</div>\n```",
      timestamp: "2h",
      likes: 24,
      comments: 8,
      shares: 3,
      liked: false,
    },
    {
      id: 2,
      author: "Alex Rodriguez",
      username: "@alexdev",
      avatar: "/developer-man.png",
      content:
        "Hot take: TypeScript has fundamentally changed how I think about JavaScript development. The type safety and IDE support make it impossible to go back to vanilla JS for large projects.\n\n```typescript\ninterface Developer {\n  name: string;\n  skills: string[];\n  caffeinated: boolean;\n}\n```",
      timestamp: "4h",
      likes: 156,
      comments: 42,
      shares: 18,
      liked: true,
    },
    {
      id: 3,
      author: "Maya Patel",
      username: "@mayatech",
      avatar: "/tech-woman.png",
      content:
        'Working on an AI-powered code review tool. Early results show 40% reduction in bugs making it to production. The future of development is here! 🤖\n\ngit commit -m "feat: add AI code review integration"',
      timestamp: "6h",
      likes: 89,
      comments: 23,
      shares: 12,
      liked: false,
    },
  ])

  const [techNews] = useState<NewsItem[]>([
    {
      id: 1,
      title: "OpenAI Announces GPT-5 with Revolutionary Reasoning Capabilities",
      source: "TechCrunch",
      time: "2 hours ago",
      engagement: "1.2K posts",
    },
    {
      id: 2,
      title: "Meta Releases Llama 3.1 with 405B Parameters",
      source: "The Verge",
      time: "4 hours ago",
      engagement: "856 posts",
    },
    {
      id: 3,
      title: "Google Chrome Introduces AI-Powered Tab Organization",
      source: "Ars Technica",
      time: "6 hours ago",
      engagement: "634 posts",
    },
    {
      id: 4,
      title: "Apple Vision Pro Gets Major Software Update",
      source: "MacRumors",
      time: "8 hours ago",
      engagement: "423 posts",
    },
  ])

  const handlePost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: posts.length + 1,
        author: "You",
        username: "@you",
        avatar: "/diverse-user-avatars.png",
        content: newPost,
        timestamp: "now",
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
      }
      setPosts([post, ...posts])
      setNewPost("")
    }
  }

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post,
      ),
    )
  }

  const sidebarItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Explore" },
    { icon: Bell, label: "Notifications" },
    { icon: Mail, label: "Messages" },
    { icon: Bookmark, label: "Bookmarks" },
    { icon: User, label: "Profile" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className="w-64 bg-sidebar border-r border-sidebar-border p-6 sticky top-0 h-screen">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-sidebar-foreground flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">DC</span>
              </div>
              dev-connect
            </h1>
          </div>

          <nav className="space-y-2 mb-8">
            {sidebarItems.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  item.active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Button>
            ))}
          </nav>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-8">
            <MessageCircle className="h-4 w-4 mr-2" />
            Create Post
          </Button>

          {/* Profile Section */}
          <div className="mt-auto pt-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3 mb-4">
              <Avatar>
                <AvatarImage src="/user-profile-illustration.png" />
                <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-sidebar-foreground">John Doe</p>
                <p className="text-sm text-muted-foreground">@johndoe</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full gap-2 text-sidebar-foreground border-sidebar-border bg-transparent hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-2xl border-r border-border">
          {/* Header */}
          <div className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border p-4">
            <h2 className="text-xl font-bold">Home</h2>
          </div>

          {/* Post Composer */}
          <div className="border-b border-border p-4">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="/diverse-user-avatars.png" />
                <AvatarFallback className="bg-primary/20 text-primary">You</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="What's happening?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[100px] border-0 resize-none text-lg placeholder:text-muted-foreground focus-visible:ring-0 bg-muted/20"
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="text-sm text-muted-foreground">{newPost.length}/280</div>
                  <Button onClick={handlePost} disabled={!newPost.trim()} className="bg-primary hover:bg-primary/90">
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div>
            {posts.map((post) => (
              <Card
                key={post.id}
                className="border-0 border-b border-border rounded-none hover:bg-muted/5 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src={post.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-primary/20 text-primary">{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{post.author}</span>
                        <span className="text-muted-foreground">{post.username}</span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-muted-foreground">{post.timestamp}</span>
                      </div>
                      <div className="text-foreground mb-3 leading-relaxed">
                        {post.content.split("\n").map((line, index) => {
                          if (line.startsWith("```")) {
                            return null
                          }
                          if (line.includes("```") || line.startsWith("git ") || line.includes("commit")) {
                            return (
                              <div key={index} className="bg-muted/50 p-2 rounded font-mono text-sm my-2">
                                {line}
                              </div>
                            )
                          }
                          return (
                            <p key={index} className="mb-1">
                              {line}
                            </p>
                          )
                        })}
                      </div>
                      <div className="flex items-center gap-6">
                        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(post.id)}
                          className={`gap-2 ${
                            post.liked ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-red-500"
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${post.liked ? "fill-current" : ""}`} />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                          <Share className="h-4 w-4" />
                          {post.shares}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Tech News */}
        <div className="w-80 bg-sidebar p-6 sticky top-0 h-screen overflow-y-auto">
          <Card className="mb-6">
            <CardHeader>
              <h3 className="text-lg font-bold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Tech News
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {techNews.map((news) => (
                <div key={news.id} className="space-y-2">
                  <h4 className="font-medium leading-tight hover:text-primary cursor-pointer transition-colors">
                    {news.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{news.source}</span>
                    <span>·</span>
                    <Clock className="h-3 w-3" />
                    <span>{news.time}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {news.engagement}
                  </Badge>
                  {news.id < techNews.length && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">Trending</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["#AI", "#WebDev", "#React", "#TypeScript", "#NextJS"].map((tag) => (
                  <div key={tag} className="flex justify-between items-center">
                    <span className="text-primary font-medium cursor-pointer hover:underline">{tag}</span>
                    <span className="text-sm text-muted-foreground">{Math.floor(Math.random() * 50) + 10}K</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
