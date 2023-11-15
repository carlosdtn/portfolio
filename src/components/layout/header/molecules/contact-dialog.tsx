import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import ContactInformation from './contact-information';

const ContactDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="default" size="default">
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" id="dots">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
        </DialogHeader>
        <ContactInformation />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
