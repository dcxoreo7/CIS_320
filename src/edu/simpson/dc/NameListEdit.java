package edu.simpson.dc;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // Type of output (HTML, JSON, image, whatever
      response.setContentType("text/plain");
      PrintWriter out = response.getWriter();
      out.println("JSON Post");

      // Open the request for reading. Read in each line, put it into a string.
      // Yes, I think there should be an easier way.
      try {
          java.io.BufferedReader in = request.getReader();
          String requestString = new String();
          for (String line; (line = in.readLine()) != null; requestString += line) ;

          // Output the string we got as a request, just as a check
          out.println(requestString);

          // Great! Now we want to use GSON to parse the object, and pop it into our business object. Field
          // names have to match. That's the magic.
          Gson gson = new Gson();
          Person fromJson = gson.fromJson(requestString, Person.class);

          // Make sure our field was set.
          PersonDAO.createPerson(fromJson);
      }

      catch (Exception e){
          e.printStackTrace();
      }



    }
  }

