﻿using System.Collections.Generic;

namespace Model
{
    public class Vraag
    {
        public int Id { get; set; }
        public string VraagZin { get; set; }
        public List<Antwoord> Antwoorden { get; set; }

    }
}

