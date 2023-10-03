<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'name' => 'Roei Boribor',
            'email' => 'roeiboribor.metacombpo@gmail.com',
        ]);

        \App\Models\User::factory(100)->create();
    }
}
