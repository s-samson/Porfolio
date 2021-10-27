<?php

class DbClientRepository
{
    protected $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function findAll()
    {
        $sth = $this->db->prepare('select * from client');
        $sth->execute();
        $result = $sth->fetchAll();
        return $result;
    }
}
