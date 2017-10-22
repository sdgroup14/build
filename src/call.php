<?php
    $data['post'] = file_get_contents('php://input');
    strip_tags($data['post']);
    
    if(!empty($data['post'])) {
        $send = json_decode($data['post']);
        if ($send->name != '' && $send->phone != '') {
            //$request = 'https://api.telegram.org/bot451598455:AAHDR1nDyRevbKs-aNTm-vS4XWoAjofjdo0/sendmessage?chat_id=134045301&text=' . urlencode('Перезвоните мне пожалуйста:') . '%0A' . urlencode($send->name . ', +38' . $send->phone);
            $request = 'https://api.telegram.org/bot451598455:AAHDR1nDyRevbKs-aNTm-vS4XWoAjofjdo0/sendmessage?chat_id=-172101044&text=' . urlencode('Перезвоните мне пожалуйста:') . '%0A' . urlencode($send->name . ', +38' . $send->phone);
            $response = file_get_contents($request);
            echo($response);
        }
        } else {
            exit('false');
    }