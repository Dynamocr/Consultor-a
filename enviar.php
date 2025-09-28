<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['phone'];
    $mensaje = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'darkfenixceha@gmail.com';
        $mail->Password = 'blrz likq pahw ckor';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($email, $nombre);
        $mail->addAddress('darkfenixceha@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = "Nuevo mensaje de contacto - $nombre";
        // Enviar con el logo incrustado
        $mail->addEmbeddedImage('img/logo-correo.png', 'logoRDA');
        $mail->Body = "
            <div style='font-family: Arial, sans-serif; max-width:650px; margin:0 auto; border:1px solid #ddd; border-radius:8px; overflow:hidden;'>
                
                <!-- Encabezado -->
                <div style='background:#000000; color:#fff; padding:20px; text-align:center;'>
                    <img src='cid:logoRDA' alt='Logo Rojas Daza & Asociados' style='max-height:70px; margin-bottom:10px;'>
                    <h2 style='margin:0; font-size:22px; font-weight:bold;'>Consultoría y Asesoría Legal</h2>
                    <p style='margin:0; font-size:14px;'>Rojas Daza & Asociados</p>
                </div>

                <!-- Contenido -->
                <div style='padding:25px; background:#f9f9f9;'>
                    <h3 style='color:#c8a165; margin-top:0; font-size:18px;'>📌 Detalles del mensaje:</h3>
                    <table style='width:100%; border-collapse:collapse; font-size:14px;'>
                        <tr>
                            <td style='padding:10px; border-bottom:1px solid #eee; width:30%;'><strong>Nombre:</strong></td>
                            <td style='padding:10px; border-bottom:1px solid #eee;'>$nombre</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border-bottom:1px solid #eee;'><strong>Email:</strong></td>
                            <td style='padding:10px; border-bottom:1px solid #eee;'>$email</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border-bottom:1px solid #eee;'><strong>Teléfono:</strong></td>
                            <td style='padding:10px; border-bottom:1px solid #eee;'>$telefono</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; vertical-align:top;'><strong>Mensaje:</strong></td>
                            <td style='padding:10px;'>$mensaje</td>
                        </tr>
                    </table>
                </div>

                <!-- Pie -->
                <div style='background:#000000; color:#fff; text-align:center; padding:15px; font-size:12px;'>
                    <p style='margin:0;'>Este correo fue generado automáticamente desde el formulario de contacto.</p>
                    <p style='margin:5px 0 0 0;'>© " . date("Y") . " Consultoría y Asesoría Legal | Rojas Daza & Asociados</p>
                </div>
            </div>
        ";

        $mail->send();
        echo "✅ Mensaje enviado correctamente.";
    } catch (Exception $e) {
        echo "❌ Error al enviar el mensaje. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "🚫 Acceso inválido.";
}
?>