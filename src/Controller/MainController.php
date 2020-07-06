<?php

namespace App\Controller;

use App\Form\ContactMeType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class MainController extends AbstractController
{
    

    /**
     * @Route("/", name="main", methods= {"GET", "POST"})
     */
    public function contact(Request $request, MailerInterface $mailer){

        $form = $this->createForm(ContactMeType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $email = $form['email']->getData();
            $objet = $form['objet']->getData();
            $message = $form['message']->getData();

            $email = (new Email())
                    ->from($email)
                    ->to('gaetancanovas@gmail.com')
                    ->subject($objet)
                    ->html('<h1>Message de '.$email.'<p>: '.$message.'</p>');

                    $mailer->send($email);

                    $this->addFlash('success', 'Votre message à bien été envoyé ');

                    return $this->redirectToRoute('main');
        }else {
            $this->addFlash('alert', 'Votre message n\'a pu être envoyé ');
        }

        return $this->render('main/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/telechargements", name="download_resume")
     */
    public function download ()
    {
        return $this->file(
            __DIR__.'/../../public/assets/downloads/Gaetan_Canovas_CV.pdf',
            null,
            ResponseHeaderBag::DISPOSITION_ATTACHMENT
        );
    }
}

