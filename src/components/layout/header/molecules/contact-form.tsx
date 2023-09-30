import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="default" size="default">
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Feel free to get in touch with me using the form below. I'll get
            back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name..." />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="username">Company</Label>
            <Input id="company" placeholder="Company name..." />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="username">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter an aditional message..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
