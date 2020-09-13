<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function getTasks(){

        $tasks = Task::all();

        return $tasks;
    }

    public function taskComplete(Request $request){
        
        $taskToComplete = Task::find($request->TASK_ID);

        if($taskToComplete != null){
            $taskToComplete->TASK_DONE = !$taskToComplete->TASK_DONE;
            $taskToComplete->save();
        }

        return $taskToComplete;
    }

    public function addTask(Request $request){
        if($request->TASK_NAME != null && $request->TASK_NAME != ''){
            $taskToAdd = new Task([
                'TASK_NAME' => $request->TASK_NAME
            ]);
    
            $taskToAdd->save();
            return $taskToAdd;
        }
        return null;
    }

    public function deleteTask(Request $request){
        if($request->TASK_ID != null){
            $taskToDelete = Task::find($request->TASK_ID);
            if($taskToDelete != null){
                $taskToDelete->delete();
            }
            return true;
        }
        return false;
    }
}
